#include "civalg.h"
#include <Halide.h>
#include <napi.h>
#include "Color.h"
#include <iostream>

#define EXPORT_JS_FUNCTION_PARAM(name) exports.Set(#name, Napi::Function::New(env, civalg::name));

namespace civalg {
  Napi::Value extractImageColors(const Napi::CallbackInfo& info) {
    if (info.Length() != 4) return info.Env().Undefined();
    Napi::Number nWidth = info[0].As<Napi::Number>();
    int width = nWidth.Int32Value();
    Napi::Number nHeight = info[1].As<Napi::Number>();
    int height = nHeight.Int32Value();
    Napi::Number nChannel = info[2].As<Napi::Number>();
    int channel = nChannel.Int32Value();
    Napi::ArrayBuffer nBuffer = info[3].As<Napi::ArrayBuffer>();
    std::cout<<"----\n";
    Halide::Buffer<uint8_t> input;// = load_image("images/rgb.png");
    RGB2HSV(input, 2,2);
    return info.Env().Undefined();
  }
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  EXPORT_JS_FUNCTION_PARAM(extractImageColors);
  return exports;
}

NODE_API_MODULE(civalg, Init);
