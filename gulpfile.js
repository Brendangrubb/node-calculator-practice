var gulp = require('gulp');
var browserify = require('browserify');
var vinyl = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('uglify');
var util = require('util');
var del = require('del');
var jshint = require('jshint');
