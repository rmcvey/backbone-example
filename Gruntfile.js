/*global module:false*/
module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      libs: {
        src: ['bower_components/jquery/dist/jquery.js', 'bower_components/underscore/underscore.js', 'bower_components/backbone/backbone.js',
					'bower_components/backbone-localstorage/backbone-localstorage.js'],
				dest: 'dist/libs.js'
			},
			app: {
				src: ['js/application.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.libs.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
  });

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify']);
};
