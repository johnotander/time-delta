'use strict';

var TimeDelta = function () {
  this.secondsOffset = 0;
  this.minutesOffset = 0;
  this.hoursOffset = 0;
  this.daysOffset = 0;
  this.weeksOffset = 0;
  this.monthsOffset = 0;
  this.yearsOffset = 0;
}

TimeDelta.prototype.seconds = function(seconds) {
  this.secondsOffset = seconds;
  return this;
}

TimeDelta.prototype.minutes = function(minutes) {
  this.minutesOffset = minutes;
  return this;
}

TimeDelta.prototype.hours = function(hours) {
  this.hoursOffset = hours;
  return this;
}

TimeDelta.prototype.days = function(days) {
  this.daysOffset = days;
  return this;
}

TimeDelta.prototype.weeks = function(weeks) {
  this.weeksOffset = weeks;
  return this;
}

TimeDelta.prototype.months = function(months) {
  this.monthsOffset = months;
  return this;
}

TimeDelta.prototype.years = function(years) {
  this.yearsOffset = years;
  return this;
}

TimeDelta.prototype.fromNow = function() {
  console.log('secondsOffset: ' + this.secondsOffset);
  console.log('minutesOffset: ' + this.minutesOffset);
  console.log('hoursOffset: ' + this.hoursOffset);
  console.log('daysOffset: ' + this.daysOffset);
  console.log('weeksOffset: ' + this.weeksOffset);
  console.log('monthsOffset: ' + this.monthsOffset);
  console.log('yearsOffset: ' + this.yearsOffset);
}

TimeDelta.prototype.ago = function() {
  console.log('secondsOffset: ' + this.secondsOffset);
  console.log('minutesOffset: ' + this.minutesOffset);
  console.log('hoursOffset: ' + this.hoursOffset);
  console.log('daysOffset: ' + this.daysOffset);
  console.log('weeksOffset: ' + this.weeksOffset);
  console.log('monthsOffset: ' + this.monthsOffset);
  console.log('yearsOffset: ' + this.yearsOffset);
}

module.exports = TimeDelta;
