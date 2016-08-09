$(document).ready(function(){
  $.ajax({
        type: "GET",
        url: "data.csv",
        dataType: "text",
        success: function(data) {
          output = data
          .trim()
          .split('\r')
          .map(line => line.split(','))
          .reduce((crimes, line) => {
            crimes[line[2]] = crimes[line[2]] || []
            crimes[line[2]].push({
              address:        line[1],
              district:       line[2],
              beat:           line[3],
              grid:           line[4],
              ucr_ncic_code:  line[6],
              latitude:       line[7],
              longitude:      line[8],
              crimedesc:      line[5]
            })
            return crimes
          }, {})

          // log for debug
          console.log('length: ', JSON.stringify(output, null, '\t').length)
          console.log('output: ', JSON.stringify(output, null, '\t'));
          console.log('content: ', JSON.stringify(output['1'][0]['address'], null, '\t'));

          var outputString = JSON.stringify(output, null, '\t')
          var outputLength = output['1'].length
          for (i = 0; i < outputLength; i++){
            //console.log(output[i])
            $('body .pre').append("<span class='col'>"+output['1'][i]['crimedesc']+"</span><span class='col'>"+output['2'][i]['crimedesc']+"</span><span class='col'>"+output['3'][i]['crimedesc']+"</span><span class='col'>"+output['4'][i]['crimedesc']+"</span>")
            //$('body .pre').append("<span>"+i+" : "+outputLength+"</span>")
          }


            // end of success
        }
     });
   });
