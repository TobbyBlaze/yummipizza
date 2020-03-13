<?php

namespace App;

<<<<<<< HEAD
use Laravel\Passport\HasApiTokens;

=======
>>>>>>> b1a1aa25e78498c4c154bbd983aed9c65cfbf707
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
<<<<<<< HEAD
    use HasApiTokens, Notifiable;
=======
    use Notifiable;
>>>>>>> b1a1aa25e78498c4c154bbd983aed9c65cfbf707

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
<<<<<<< HEAD
        'status', 'name', 'email', 'password',
=======
        'name', 'email', 'password',
>>>>>>> b1a1aa25e78498c4c154bbd983aed9c65cfbf707
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function goods(){
        return $this->hasMany('App\Good');
    }
<<<<<<< HEAD

    public function carts(){
        return $this->hasMany('App\Cart');
    }

    public function reviews(){
        return $this->hasMany('App\Review');
    }

=======
>>>>>>> b1a1aa25e78498c4c154bbd983aed9c65cfbf707
}
