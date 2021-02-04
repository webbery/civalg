#pragma once
#include <vips/vips.h>

namespace civalg{
  class Image {
  public:
    Image(const char* filename);
    ~Image();

  public:
    char* thumbnail();
    
  private:
    VipsImage* _pImage = nullptr;
  };
}