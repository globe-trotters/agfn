angular.module("myApp").service("mainService", function() {
  this.cohorts = [
    {
      "cohortNum": "DM1",
      "start": "2014-11-10T10:20:90Z",
      "end": "2015-03-01T10:20:90Z",
      "people": [
        {
          "geometryfrom": {
            "city": "Chicago",
            "state": "IL",
            "country": "USA",
            "coordinates": [-87.6847, 41.8369]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-117.1625, 32.7150],
            "city": "San Diego",
            "state": "CA",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Kent",
            "state": "OH",
            "country": "USA",
            "coordinates": [-81.3611, 41.1506]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-111.8833, 40.7500],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Denver",
            "state": "CO",
            "country": "USA",
            "coordinates": [-104.9903, 39.7392]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-111.6965, 40.2988],
            "city": "Orem",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Toronto",
            "state": "ON",
            "country": "Canada",
            "coordinates": [-81.3611, 45.1506]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-111.8833, 40.7500],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Roanoke",
            "state": "VA",
            "country": "USA",
            "coordinates": [-81.3611, 35.1506]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-111.8833, 40.7500],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Kent",
            "state": "OH",
            "country": "USA",
            "coordinates": [-81.3611, 41.1506]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-111.8833, 40.7500],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Kent",
            "state": "OH",
            "country": "USA",
            "coordinates": [-81.3611, 41.1506]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-111.8833, 40.7500],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Kent",
            "state": "OH",
            "country": "USA",
            "coordinates": [-81.3611, 41.1506]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-111.8833, 40.7500],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        }
      ]
    },
    {
      "cohortNum": "DM2",
      "start": "2015-01-05T10:20:90Z",
      "end": "2015-04-20T10:20:90Z",
      "people": [
        {
          "geometryfrom": {
            "city": "Baltimore",
            "state": "MD",
            "country": "USA",
            "coordinates": [-76.6167, 39.2833]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-77.0164, 38.9047],
            "city": "Washington D.C.",
            "state": "MD",
            "country": "USA"
          },
          "job": false
        },
        {
          "geometryfrom": {
            "city": "Bogota",
            "state": "Cundinamarca",
            "country": "Colombia",
            "coordinates": [-74.0758, 4.5981]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-111.8833, 40.7500],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Madrid",
            "state": "Spainstate",
            "country": "Spain",
            "coordinates": [-7, 40]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [-111.8833, 40.7500],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        }
      ]
    },
    {
      "cohortNum": "DM3",
      "start": "2015-03-02T10:20:90Z",
      "end": "2015-06-15T10:20:90Z",
      "people": [
        {
          "geometryfrom": {
            "city": "Moscow",
            "state": "NA",
            "country": "Russia",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Moscow",
            "state": "NA",
            "country": "Russia",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Moscow",
            "state": "NA",
            "country": "Russia",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Moscow",
            "state": "NA",
            "country": "Russia",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Moscow",
            "state": "UT",
            "country": "USA",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "St George",
            "state": "UT",
            "country": "USA",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Dubai",
            "state": "Emerate",
            "country": "Arab of Emarates",
            "coordinates": [70.6167, 100.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Moscow",
            "state": "NA",
            "country": "Russia",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Moscow",
            "state": "NA",
            "country": "Russia",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Moscow",
            "state": "NA",
            "country": "Russia",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        },
        {
          "geometryfrom": {
            "city": "Moscow",
            "state": "NA",
            "country": "Russia",
            "coordinates": [37.6167, 55.75]
          },
          "geometrycamp": {
            "coordinates": [-111.6608, 40.2444],
            "city": "Provo",
            "state": "UT",
            "country": "USA"
          },
          "geometryto": {
            "coordinates": [40, 60],
            "city": "Salt Lake City",
            "state": "UT",
            "country": "USA"
          },
          "job": true
        }
      ]
    }
  ];


});
