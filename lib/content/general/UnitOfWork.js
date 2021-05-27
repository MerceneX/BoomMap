const ContentRepository = require('./infrastructure/ContentRepository');
const ContentDAO = require('./infrastructure/DAO/ContentDAO');
const Parsers = require('./infrastructure/parsers/');
const urls = require('./infrastructure/urls');
const getFromApi = require('../modules/getFromAPI');

const getBorders = async options => {
  return await new ContentRepository(
    ContentDAO.getInstance(),
    Parsers.Borders,
    getFromApi,
    urls.borders,
    'borders'
  ).getContent(options);
};

const getRoadConditions = async options => {
  return await new ContentRepository(
    ContentDAO.getInstance(),
    Parsers.RoadConditions,
    getFromApi,
    urls.roadConditions,
    'road-conditions'
  ).getContent(options);
};

const getRoadEvents = async options => {
  return await new ContentRepository(
    ContentDAO.getInstance(),
    Parsers.RoadEvents,
    getFromApi,
    urls.roadEvents,
    'road-events'
  ).getContent(options);
};

const getNews = async options => {
  return await new ContentRepository(
    ContentDAO.getInstance(),
    Parsers.News,
    getFromApi,
    urls.news,
    'news'
  ).getContent(options);
};

const getTrafficForecast = async options => {
  return await new ContentRepository(
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
