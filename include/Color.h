#pragma once

namespace civalg{
  // Halide::Buffer<uint8_t> RGB2HSV(const Halide::Buffer<uint8_t>& input, int width, int height, int channel = 3);
  // void HSV2RGB(const Halide::Buffer<uint8_t>& input, int width, int height, int channel = 3);
  void Map2Index();
  void Index2Map();
}