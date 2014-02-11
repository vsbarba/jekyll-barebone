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
      less: {
        files: ['<%= site.app_dir %>/assets/less/**/*.less'],
        tasks: ['less']
      },
      jekyll: {
        files: [
          '<%= site.app_dir %>/**/*.{html,yml,md,mkd,markdown,css}',
          '_config.yml',
          'app/'
        ],
        tasks: ['jekyll:server']
      }
    },
    clean: {
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    less: {
      development: {
        options: {
          paths: ["app/assets/css"],
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "app/assets/css/bootstrap.css": "app/assets/less/bootstrap/less/bootstrap.less"
        }
      },
      main: {
        options: {
          paths: ["app/assets/css"],
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "app/assets/css/main.css": "app/assets/less/main.less"
        }
      }
    },
    copy: {
      boostrap_less: {
        expand: true,
        cwd: '<%= site.app_dir %>/_bower_components/',
        src: ['bootstrap/less/**'],
        dest: 'app/assets/less/'
      },
      others: {
        expand: true,
        cwd: '<%= site.app_dir %>/_bower_components/',
        src: ['jquery/jquery.js', 'modernizr/modernizr.js'],
        dest: 'app/assets/js/'
      }
    }
  });

  // Load the tasks
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //See dev env compiled in .jekyll
  // grunt.registerTask('default', ['concurrent:dev']);

  // Careful with this usually run once
  grunt.registerTask('copy-bootstrap', ['copy:boostrap_less']);
  // Use this to update jquery, modernizr
  grunt.registerTask('copy-update', ['copy:others']);

  grunt.registerTask('update-assets', function () {
    grunt.task.run([
      'copy-update'
    ]);
  })

  // Serve your website
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
  //README
  // npm install
  // bower install
  // grunt copy-bootstrap
  // grunt update-assets
  // grunt serve to serve :)
  // TODO create build dist
  // TODO upload straight to gh-pages
};
