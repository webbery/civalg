#include "civalg.h"
#include <Halide.h>
#include <napi.h>
#include "Color.h"

#define EXPORT_JS_FUNCTION_PARAM(name) exports.Set(#name, Napi::Function::New(env, civalg::name));

namespace civalg {
  Napi::Value extractImageColors(const Napi::CallbackInfo& info) {
    Halide::Buffer<uint8_t> input;// = load_image("images/rgb.png");
    RGB2HSV(input, 2,2);
    return info.Env().Undefined();
  }
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  EXPORT_JS_FUNCTION_PARAM(extractImageColors);
  return exports;
}