<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //
    function addProduct(Request $req){
        $product=new Product;
        $product->name=$req->input('name');
        $product->price=$req->input('price');
        $product->description=$req->input('description');
        $product->filepath=$req->file('filepath')->store('pictures');
        $product->save();

        return $product;
    }
    function list(){
        return Product::all();
    }

    function delete($id){
        $result= Product::where('id',$id)->delete();
        if($result){
        return ["result"=>"has been deleted"];
        }
        else{
            return ["result"=>"No such product"];
        }
    }
    function singleProduct($id){
        return Product::find($id);
    }
    

}
 