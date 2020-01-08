<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Good extends Model
{
    use Notifiable;
    //Table name
    protected $table = 'goods';
    //Primary Key
    public $primaryKey = 'id';
    //Timestamps
    public $timestamps = true;

    protected $fillable = [
        // 'id',
        'title',
        'body',
        'good_user_id',
        'good_user_name',
        'user_id',
        'file',
        'image',
        // 'register_by',
        // 'modified',
        // 'modified_by',
        // 'record_deleted',
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function goods(){
        return $this->belongsTo('App\User');
    }

    public function comments(){
        return $this->hasMany('App\Comment');
    }
}
