const ContentGuy = require('./borders/ContentGuy');
const ContentDAO = require('./borders/DAO/ContentDAO');
const Parsers = require('./borders/parsers/');
const urls = require('./borders/urls');
const getFromApi = require('../modules/getFromAPI');

const getBorders = async options => {
  return await new ContentGuy(
    ContentDAO.getInstance(),
    Parsers.Borders,
    getFromApi,
    urls.borders,
    'borders'
  ).getContent(options);
};

const getRoadConditions = async options => {
  return await new ContentGuy(
    ContentDAO.getInstance(),
    Parsers.RoadConditions,
    getFromApi,
    urls.roadConditions,
    'road-conditions'
  ).getContent(options);
};

const getRoadEvents = async options => {
  return await new ContentGuy(
    ContentDAO.getInstance(),
    Parsers.RoadEvents,
    getFromApi,
    urls.roadEvents,
    'road-events'
  ).getContent(options);
};

const getNews = async options => {
  return await new ContentGuy(
    ContentDAO.getInstance(),
    Parsers.News,
    getFromApi,
    urls.news,
    'news'
  ).getContent(options);
};

const getTrafficForecast = async options => {
  return await new ContentGuy(
    ContentDAO.getInstance(),
    Parsers.TrafficForecast,
    getFromApi,
    urls.trafficForecast,
    'traffic-forecast'
  ).getContent(options);
};

module.exports = {
  getBorders,
  getRoadConditions,
  getRoadEvents,
  getNews,
  getTrafficForecast
};
