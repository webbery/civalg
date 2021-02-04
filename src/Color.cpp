#include "Color.h"

namespace civalg{
  // Halide::Buffer<uint8_t> RGB2HSV(const Halide::Buffer<uint8_t>& input, int width, int height, int channel) {
  //   // Halide::Input<Halide::Buffer<uint8_t>> input{"input", 3};
  //   Halide::Func converter("convert");
  //   Halide::Var x("x"), y("y"), c("pixel");
  //   Halide::Expr R = input(x,y,0);
  //   Halide::Expr G = input(x,y,1);
  //   Halide::Expr B = input(x,y,2);
    
  //   std::cout<<"--1--\n";
  //   Halide::Expr maxValue=Halide::max(R,G);
  //   maxValue=Halide::max(maxValue,B);
  //   Halide::Expr minValue=Halide::min(R,G);
  //   minValue=Halide::min(minValue,B);
    
  //   Halide::Expr V=maxValue;
  //   Halide::Expr S=(maxValue-minValue)/maxValue;
  //   Halide::Expr H = Halide::select(maxValue == R, (G-B)/(maxValue-minValue)*60,
  //                  maxValue == G, 120+(B-R)/(maxValue-minValue)*60,
  //                  maxValue == B, 240+(R-G)/(maxValue-minValue)*60,
  //                  /* else */     0);
  //   converter(x, y) = {H, S, V};
  //   std::cout<<"----\n";
  //   Halide::Buffer<uint8_t> output = converter.realize(width, height);
  //   return std::move(output);
  // }

  // void HSV2RGB(const Halide::Buffer<uint8_t>& input, int width, int height, int channel){
    
  // }
}