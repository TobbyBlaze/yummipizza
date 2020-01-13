<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;
use App\User;
use App\Good;
use App\Cart;
use App\Review;
use Illuminate\Support\Facades\Input;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group([ 'prefix' => 'auth'], function (){ 
    Route::group(['middleware' => ['guest:api']], function () {
        Route::post('login', 'API\AuthController@login');
        Route::post('signup', 'API\AuthController@signup');
    });
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'API\AuthController@logout');
        Route::get('getuser', 'API\AuthController@getUser');

        //Goods

        Route::get('home', 'GoodsController@index')->name('home');
        Route::resource('', 'GoodsController');
        Route::resource('show', 'GoodsController');
        // Route::resource('show', 'GoodsController');
        Route::resource('review', 'ReviewsController');
        Route::any('storereview/{id}', 'ReviewsController@store');
        Route::resource('cart', 'CartsController');
        Route::any('storecart/{id}', 'CartsController@store');
        Route::any ( 'found-all', 'FindController@all');

        // Route::get('notification/{profileId}', 'UserController@notification');
        // Route::get('notification/{profileId}/read', 'UserController@notificationRead');

        // Route::get('user/{profileId}/follow', ['as' => 'user.follow', 'uses' => 'UserController@followUser']);
        // Route::get('user/{profileId}/unfollow', ['as' => 'user.unfollow', 'uses' => 'UserController@unfollowUser']);
        // Route::get('user/{profileId}', 'UserController@viewProfile');
        // Route::get('user/{profileId}/show', 'UserController@show');
        // Route::get('user/{profileId}/followers', 'UserController@followers');
        // Route::get('user/{profileId}/followings', 'UserController@followings');
        // // Route::get('/user/{profileId}/edit', 'UserController@edit');

        // Route::get('user/{profileId}/edit',  ['as' => 'user.edit', 'uses' => 'UserController@edit']);
        // // Route::get('user/edit',  ['as' => 'user.edit', 'uses' => 'UserController@edit']);
        // Route::put('user/{user}/update',  ['as' => 'user.update', 'uses' => 'UserController@update']);

        // Route::resource('user/{profileId}/edit',  ['as' => 'user.edit', 'uses' => 'UserController@edit']);
        // Route::resource('user/{user}/update',  ['as' => 'user.update', 'uses' => 'UserController@update']);
    });
});

