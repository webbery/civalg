{
  "targets": [
    {
      "target_name": "civalg",
      "sources": [
        "src/civalg.cpp",
        "src/util.cpp"
      ],
      "include_dirs": [
        "include",
        "halide/include",
        # "<!(node -e \"require('nan')\")",
        '<!@(node -p "require(\'node-addon-api\').include")',
      ],
      'conditions': [
        ['OS == "win"', {
          'type': 'shared_library',
          'link_settings': {
            'library_dirs': ['halide/lib/Release'],
            'libraries': [
              'Halide.lib'
            ],
          },
          'configurations': {
            'Release': {
              'msvs_settings': {
                'VCCLCompilerTool': {
                  'ExceptionHandling': 1,
                  'WholeProgramOptimization': 'true'
                },
                'VCLibrarianTool': {
                  'AdditionalOptions': [
                    '/LTCG:INCREMENTAL'
                  ]
                },
                'VCLinkerTool': {
                  'ImageHasSafeExceptionHandlers': 'false',
                  'OptimizeReferences': 2,
                  'EnableCOMDATFolding': 2,
                  'LinkIncremental': 1,
                  'AdditionalOptions': [
                    '/LTCG:INCREMENTAL'
                  ]
                }
              },
              'msvs_disabled_warnings': [
                4275
              ]
            }
          }
        }]
      ]
    }
  ]
}