<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;
use lluminate\Database\Eloquent\Collection\visits;
use App\Good;
use App\User;
use App\Notifications\newGood;
use Auth;
use DB;

class GoodsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::find(auth::user()->id);
        $users = User::where('users.status', '!=', auth()->user()->status)->orWhere('users.department', '=', auth()->user()->department)->orWhere('users.school', '=', auth()->user()->school)->orWhere('users.college', '=', auth()->user()->college)->orderBy('users.created_at', 'desc')->paginate(10);

        // $goods = good::orderBy('goods.updated_at', 'desc')->paginate(20);
        // $goods = Good::orderBy('goods.updated_at', 'desc')
        // ->select('goods.*')
        // ->join('followers', 'followers.leader_id', '=', 'goods.user_id')
        // // ->where([['followers.follower_id', '=', $user->id], ['goods.user_id', '=', '1']])
        // // ->where('goods.user_id', $user->id)
        // ->where('followers.follower_id', $user->id)
        // ->paginate(20);

        $goods = Good::orderBy('goods.updated_at', 'desc')
        ->paginate(20);

        // dd($goods);

        $comments = Comment::orderBy('comments.updated_at', 'desc')
        ->paginate(20);

        // return view('goods.index', compact('user', 'users', 'followers' , 'followings', 'goods'), ['user' => $user])->with('goods', $goods)->with('user', $user)->with('comments', $comments);

        $data = [

            'user' => $user,
            'users' => $users,
            'goods'=>$goods,
            'follower' => $followers,
            'followings' => $followings,
            'comments' => $comments,

        ];

        return response()->json($data,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('goods.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, ['body' => 'required']);
        //return 123; 'image' => , 'file' => 'nullable|max:6000'

        // $good = good::create($request->all());
        // return response()->json($good, 201);

        if($request->hasFile('file')){
            $filenameWithExt = $request->file('file')->getClientOriginalName();
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('file')->getClientOriginalExtension();
            $filenameToStore = $filename.'_'.time().'.'.$extension;
            //$path = $request->file('file')->storeAs('public/files/documents', $filenameToStore);
            
            if($extension == "jpg" || $extension == "jpeg" || $extension == "png" || $extension == "gif"){
                $path = $request->file('file')->storeAs('public/files/images', $filenameToStore);
            }

            //create good

            $good = new Good;
            $good->title = $request->input('title');
            $good->body = $request->input('body');
            $good->user_id = auth()->user()->id;
           
            if($extension == "jpg" || $extension == "jpeg" || $extension == "png" || $extension == "gif"){
                $good->image = $filenameToStore;
            }
            
            $good->save();

            // return redirect('/')->with('success', 'good created successfully');
            return response()->json($good, 201);
            
        }else{
            $filenameToStore = 'NoFile';

            //create good

            $good = new Good;
            $good->title = $request->input('title');
            $good->body = $request->input('body');
            $good->user_id = auth()->user()->id;
           
            $good->save();

            // return redirect('/')->with('success', 'good created successfully');
            return response()->json($good, 201);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $good = Good::find($id);

        $user = User::find($id);

        $users = User::where('users.status', '!=', auth()->user()->status)->orWhere('users.department', '=', auth()->user()->department)->orWhere('users.school', '=', auth()->user()->school)->orWhere('users.college', '=', auth()->user()->college)->orderBy('users.created_at', 'desc')->paginate(10);

        
        $goods = Good::all();

        Good::where('id', '=', $id)
        ->update([
            // Increment the view counter field
            'views' => 
            $good->views + 1        ,
            // Prevent the updated_at column from being refreshed every time there is a new view
            'updated_at' => \DB::raw('updated_at')   
        ]);

        $comments = Comment::orderBy('comments.updated_at', 'desc')
        ->paginate(20);

        $good_data = [
            'good' => '$good',
            'goods' => '$goods',
            'user' => '$user',
            'users' => '$users',
            'comments' => '$comments',
        ];

        return response()->json($good_data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $good = Good::find($id);
        // $good->update($request->all());
        // return response()->json($good, 200);

        $user = User::find($id);

        $users = User::where('users.status', '!=', auth()->user()->status)->orWhere('users.department', '=', auth()->user()->department)->orWhere('users.school', '=', auth()->user()->school)->orWhere('users.college', '=', auth()->user()->college)->orderBy('users.created_at', 'desc')->paginate(10);

        

        $goods = Good::orderBy('goods.updated_at', 'desc');
       
        if(auth()->user()->id !== $good->user_id){
            // return redirect('/')->with('error', 'Unauthorised page');
            return response()->json($error, 401);
        }

        $edit_data = [
            'good' => '$good',
            'user' => 'user',
            'goods' => '$goods',
        ];

        // return view('goods.edit')->with('good', $good)->with('user', $user)->with('users', $users);
        return response()->json($edit_data, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $good = Good::find($id);
        // $good->update($request->all());
        // return response()->json($good, 200);

        $this->validate($request, ['body' => 'required']);
        //return 123;

        if($request->hasFile('file')){
            $filenameWithExt = $request->file('file')->getClientOriginalName();
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('file')->getClientOriginalExtension();
            $filenameToStore = $filename.'_'.time().'.'.$extension;
            //$path = $request->file('file')->storeAs('public/files/documents', $filenameToStore);
            
            if($extension == "jpg" || $extension == "jpeg" || $extension == "png" || $extension == "gif"){
                $path = $request->file('file')->storeAs('public/files/images', $filenameToStore);
            }elseif ($extension == "doc" || $extension == "docx" || $extension == "pdf" || $extension == "zip" || $extension == "rar" || $extension == "pptx" || $extension == "tex" || $extension == "txt") {
                $path = $request->file('file')->storeAs('public/files/documents', $filenameToStore);
            }

            //create good

            $good = Good::find($id);
            $good->title = $request->input('title');
            $good->body = $request->input('body');
            $good->user_id = auth()->user()->id;
            //$good->document = $filenameToStore;

            //$extension = $request->file('file')->getClientOriginalExtension();
            
            if($extension == "jpg" || $extension == "jpeg" || $extension == "png" || $extension == "gif"){
                $good->image = $filenameToStore;
            }elseif ($extension == "doc" || $extension == "docx" || $extension == "pdf" || $extension == "zip" || $extension == "rar" || $extension == "pptx" || $extension == "tex" || $extension == "txt") {
                $good->file = $filenameToStore;
            }
            
            $good->save();

            // return redirect()->back()->with('success', 'good created successfully');
            return response()->json($good, 201);
            
            
        }else{
            $filenameToStore = 'NoFile';

            //update good

            $good = Good::find($id);
            $good->title = $request->input('title');
            $good->body = $request->input('body');
            $good->user_id = auth()->user()->id;
            //$good->document = $filenameToStore;
            
            $good->save();

            // return redirect()->back()->with('success', 'good updated successfully');
            return response()->json($good, 201);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $good = Good::find($id);
        // $good->delete();
        // return response()->json($good, 200);

        if(auth()->user()->id !== $good->user_id){
            return redirect('/')->with('error', 'Unauthorised page');
        }

        Storage::delete('public/files/documents/'.$good->file);
        Storage::delete('public/files/images/'.$good->image);
        $good->delete();

        return response()->json($good, 201);
    }
}
