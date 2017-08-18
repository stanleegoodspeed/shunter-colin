module.exports = function (grunt) {
    grunt.initConfig({
        stylelint: {
            files: ['./resources/css/**/*.scss', './resources/css/*.scss']
        },
        xo: {
            files: ['resources/js/*.js'] 
        },
        watch: {
            files: ['<%= xo.files %>', '<%= stylelint.files %>'],
            tasks: ['xo','stylelint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-stylelint");
    grunt.loadNpmTasks("grunt-xo");
    grunt.registerTask('default', ['watch']);
}