#include "util.h"
#include <string>
#include <napi.h>

namespace civalg {

  std::string AttrAsStr(Napi::Object obj, std::string attr)
  {
    return obj.Get(attr).As<Napi::String>();
  }

  uint32_t AttrAsUint32(Napi::Object obj, std::string attr)
  {
    return obj.Get(attr).As<Napi::Number>().Uint32Value();
  }

  uint32_t AttrAsUint32(Napi::Object obj, unsigned int const attr)
  {
    return obj.Get(attr).As<Napi::Number>().Uint32Value();
  }

  int32_t AttrAsInt32(Napi::Object obj, std::string attr)
  {
    return obj.Get(attr).As<Napi::Number>().Int32Value();
  }

  int32_t AttrAsInt32(Napi::Object obj, unsigned int const attr)
  {
    return obj.Get(attr).As<Napi::Number>().Int32Value();
  }

  double AttrAsDouble(Napi::Object obj, std::string attr)
  {
    return obj.Get(attr).As<Napi::Number>().DoubleValue();
  }

  double AttrAsDouble(Napi::Object obj, unsigned int const attr)
  {
    return obj.Get(attr).As<Napi::Number>().DoubleValue();
  }
 }