module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        choose: {
          target: {
            options: {
              message: "Please, choose a task to run:"
            },
            choices: {
              "Build (no cache)": "build",
              "Build + Watch": "build-watch",
              "Build + Serve": [
                "build",
                "http-server",
                "open:dev",
                "watch",
              ],
              "Styleguide": [
                "build",
                "sassdown"
              ],
              "Styleguide + Serve": [
                "build",
                "http-server",
                "sassdown",
                "open:guide",
                "watch"
              ]
            }
          }
        },

        compass: {                  
            dist: {                   
                options: {             
                config: 'config.rb'
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    csslintrc: '.csslintrc'
                },
                src: ['resources/css/**/*.css', '!resources/css/libs/**/*']
            }
        },
        cssmin: {
            combine: {
                files: {
                    'resources/css/app.css': ['resources/css/**/*.css', '!resources/css/app.css', '!resources/css/libs/**/*']
                }
            }
        },
        jshint: {
            scripts: ['Gruntfile.js', 'resources/js/modules/**/*.js'],
            libraries: ['resources/js/libs/**/*.js']
        },
        concat: {
            libraries: {
                src: ['resources/js/libs/*.js', 'resources/js/libs/foundation/*.js', 'resources/js/libs/vendor/*.js'],
                dest: 'resources/js/libs.js'
            },
            modules: {
                src: ['resources/js/modules/*.js'],
                dest: 'resources/js/modules.js'
            },
            plugins: {
                src: ['resources/js/plugins/*.js'],
                dest: 'resources/js/plugins.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'resources/js/libs.min.js': ['resources/js/libs.js'],
                    'resources/js/modules.min.js': ['resources/js/modules.js'],
                    'resources/js/plugins.min.js': ['resources/js/plugins.js']
                }
            }
        },
        imagemin: {
            images: {                         
                files: [{
                    expand: true,                  
                    cwd: 'src/',                   
                    src: ['images/**/*.{png,jpg,gif}', 'resources/img/**/*.{png,jpg,gif}'],   
                    dest: 'images/'                 
                }]
            }
        },
        watch: {
            options: {
              livereload: true,
            },
            scripts: {
                files: ['resources/**/*.js'],
                tasks: ['js'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['resources/**/*.css','resources/**/*.scss'],
                tasks: ['css'],
                options: {
                    spawn: false,
                }
            },
            images: {
                files: ['resources/**/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            }
        },
        "http-server": {
            dev: {
                root: '../basis',
                port: 8282,  
                host: "127.0.0.1",
                showDir : true,
                defaultExt: "html",
                runInBackground: true
            }
        },
        open : {
            dev : {
                path: 'http://127.0.0.1:8282/index.html'
            },
            guide : {
                path: 'http://127.0.0.1:8282/public/styleguide/index.html'
            }
        },
        sassdown: {
            styleguide: {
                options: {
                    assets: ['resources/css/**.min.css','resources/js/**.min.js']
                },
                files: [{
                    expand: true,
                    cwd: 'resources/sass',
                    src: ['*.scss'],
                    dest: 'public/styleguide/'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-choose');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('sassdown');

    grunt.registerTask('css', ['compass', 'cssmin']);
    grunt.registerTask('js', ['jshint:scripts', 'concat', 'uglify']);
    grunt.registerTask('default', ['choose']);
    grunt.registerTask('build-watch', ['css', 'js', 'newer:imagemin', 'watch']);
    grunt.registerTask('build', ['css', 'js', 'imagemin', 'sassdown']);

};