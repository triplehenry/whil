import axios from 'axios';
import _ from 'lodash';

export function getNews(text){
  const url = "https://www.reddit.com/.json";

  return axios.get(url)
    .then(res => {
      let results = res.data.data.children;
      let data = [];
      _.forEach(results, (item) => {
        data.push(item.data);
      });

      return data;
    })
}

