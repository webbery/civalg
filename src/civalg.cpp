#include "civalg.h"
#include <Halide.h>
#include <napi.h>

#define EXPORT_JS_FUNCTION_PARAM(name) exports.Set(#name, Napi::Function::New(env, civalg::name));

namespace civalg {
  Napi::Value extractImageColors(const Napi::CallbackInfo& info) {
    Halide::Func gradient;
    Halide::Var x, y;
    Halide::Expr e = x + y;
    return info.Env().Undefined();
  }
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  EXPORT_JS_FUNCTION_PARAM(extractImageColors);
  return exports;
}