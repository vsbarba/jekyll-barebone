module.exports = function (grunt) {
  grunt.initConfig({
    site: {
      app_dir: 'app',
      dist_dir: 'dist'
    },
    concurrent: {
      dev: {
        tasks: ['jekyll:server', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    jekyll: {
      server: {
        options: {
          serve: true,
          baseurl: '/',
          src: 'app',
          config: '_config.yml',
          dest: '.jekyll'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      jekyll: {
        files: [
          '<%= site.app_dir %>/**/*.{html,yml,md,mkd,markdown}',
          '_config.yml',
          'app/'
        ],
        tasks: ['jekyll:server']
      }
    },
    clean: {
      // TODO DIST
      // dist: {
      //   files: [{
      //     dot: true,
      //     src: [
      //       '.tmp',
      //       '<%= site.dist_dir %>/*',
      //       // Running Jekyll also cleans the target directory.  Exclude any
      //       // non-standard `keep_files` here (e.g., the generated files
      //       // directory from Jekyll Picture Tag).
      //       '!<%= site.dist_dir %>/.git*'
      //     ]
      //   }]
      // },
      server: [
        '.tmp',
        '.jekyll'
      ]
    }
  });

  // Load the tasks
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-clean');
  //See dev env compiled in .jekyll
  // grunt.registerTask('default', ['concurrent:dev']);


  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:dev'
    ]);
  });


  //See dist for deployment ready package

};
