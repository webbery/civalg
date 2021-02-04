#include "civalg.h"
#include <napi.h>
#include "Color.h"
#include "Image.h"
#include <iostream>

#define EXPORT_JS_FUNCTION_PARAM(name) exports.Set(#name, Napi::Function::New(env, civalg::name));

namespace civalg {
  Image* g_pImage = nullptr;
  Napi::Value extractImageColors(const Napi::CallbackInfo& info) {
    if (info.Length() != 4) return info.Env().Undefined();
    Napi::Number nWidth = info[0].As<Napi::Number>();
    int width = nWidth.Int32Value();
    Napi::Number nHeight = info[1].As<Napi::Number>();
    int height = nHeight.Int32Value();
    Napi::Number nChannel = info[2].As<Napi::Number>();
    int channel = nChannel.Int32Value();
    Napi::Uint8Array nBuffer = info[3].As<Napi::Uint8Array>();
    // Halide::Buffer<uint8_t> input = Halide::Runtime::Buffer<uint8_t>::make_interleaved(
    //   (uint8_t*)nBuffer.Data(), width, height, channel);
    // Halide::Buffer<uint8_t> output = RGB2HSV(input, width, height, channel);
    // std::cout<<output.width()<<", "<<output.height()<<std::endl;
    return info.Env().Undefined();
  }

  Napi::Value read(const Napi::CallbackInfo& info) {
    VIPS_INIT("civalg");
    std::string filename = info[0].As<Napi::String>();
    g_pImage = new Image(filename.c_str());
    return info.Env().Undefined();
  }

  Napi::Value close(const Napi::CallbackInfo& info) {
    delete g_pImage;
    return info.Env().Undefined();
  }
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  EXPORT_JS_FUNCTION_PARAM(read);
  EXPORT_JS_FUNCTION_PARAM(extractImageColors);
  EXPORT_JS_FUNCTION_PARAM(close);
  return exports;
}

NODE_API_MODULE(civalg, Init);
