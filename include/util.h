#pragma once

#include <string>
#include <napi.h>

namespace civalg {
  std::string AttrAsStr(Napi::Object obj, std::string attr);
  uint32_t AttrAsUint32(Napi::Object obj, std::string attr);
  uint32_t AttrAsUint32(Napi::Object obj, unsigned int const attr);
  int32_t AttrAsInt32(Napi::Object obj, std::string attr);
  int32_t AttrAsInt32(Napi::Object obj, unsigned int const attr);
  double AttrAsDouble(Napi::Object obj, std::string attr);
  double AttrAsDouble(Napi::Object obj, unsigned int const attr);
}