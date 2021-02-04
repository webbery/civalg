#include "Image.h"
#include <string>

namespace civalg {
  Image::Image(const char* filename){
    _pImage = vips_image_new_from_file(filename, NULL);
  }
  Image::~Image(){
    vips_shutdown();
  }

  char* Image::thumbnail(){
    return nullptr;
  }
}