cmake_minimum_required (VERSION 3.6)

project(halide_test)

aux_source_directory(. TestSource)

include_directories(../Halide/include)

set(CMAKE_CXX_STANDARD 17)

link_directories(../Halide/lib)

add_executable(${PROJECT_NAME}
    ${TestSource})

target_link_libraries(${PROJECT_NAME} Halide)