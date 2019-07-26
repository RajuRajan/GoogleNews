  function func()
    {
       
     var element = document.getElementById("layout-left");
     element.classList.toggle("layout-left-toggle");
    }
    function city(){
        $(".thunder-data").empty();
        $(".today-data").empty();
        $(".sun-data").empty();
        $(".sat-data").empty();
        $(".mon-data").empty();
         
       

        var city= document.getElementById('city');
       
        console.log(document.getElementById('city').value);
           fetch('https://api.apixu.com/v1/forecast.json?key=2d46596bd8c0492bac5101629192607&q='+city.value+'&days=3', {
              
            method : 'GET'
        }).then((response) => {
            return response.json();
        }).then( (data) => {
          
            console.log(data);
            // console.log(data.current.feelslike_c)
            var tag="<h2>"+data.current.feelslike_c+" C</h2>"
            $(".thunder-data").append(tag);
    
            var avg="<p><b>"+data.current.feelslike_c+"</b></p>"
            var max="<p><b>"+data.current.temp_c+"</b></p>"
    
            $(".today-data").append(avg);
            $(".today-data").append(max);
            var avg="<p><b>"+data.forecast.forecastday[0].day.maxtemp_c+"</b></p>"
            var max="<p><b>"+data.forecast.forecastday[0].day.mintemp_c+"</b></p>"
    
            $(".sat-data").append(avg);
            $(".sat-data").append(max);
            var avg="<p><b>"+data.forecast.forecastday[1].day.maxtemp_c+"</b></p>"
            var max="<p><b>"+data.forecast.forecastday[1].day.mintemp_c+"</b></p>"
    
            $(".sun-data").append(avg);
            $(".sun-data").append(max);
            var avg="<p><b>"+data.forecast.forecastday[2].day.maxtemp_c+"</b></p>"
            var max="<p><b>"+data.forecast.forecastday[2].day.mintemp_c+"</b></p>"
    
            $(".mon-data").append(avg);
            $(".mon-data").append(max);
            
        })
    }
    
    $(document).ready(function(){


        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3d459f0e6b5e4299a06d1325d3c92187', {
          
           method : 'GET'
       }).then((response) => {
           return response.json();
       }).then( (data) => {
         
           data.articles.forEach(article => {
                if(article.content!=null && article.publishedAt!=null&&article.description!=null&& article.urlToImage!=null)
                {
                var tag="<div class='card' >"+"<div><h3 style='font-family: Arial, Helvetica, sans-serif;'>"+article.content+"</h3>"+"Published at:<p style='font-size:8pt;color:gray'>"+article.publishedAt+"</p>"+"<p style='font-family: Arial, Helvetica, sans-serif;'>"+article.description+"</p></div><div >"+"<img src='"+article.urlToImage+"' width='120px' height='120px' style='border-radius:1rem;margin:10px 20px;object-fit:cover'/>"+"</div></div>"
                $(".card-container").append(tag);
            // console.log(article);
                }
           });
       })
     var city= document.getElementById('city');
     console.log(document.getElementById('city').value);

     fetch('https://api.apixu.com/v1/forecast.json?key=2d46596bd8c0492bac5101629192607&q='+city.value+'&days=3', {
          
        method : 'GET'
    }).then((response) => {
        return response.json();
    }).then( (data) => {
      
        console.log(data);
        // console.log(data.current.feelslike_c)
        var tag="<h2>"+data.current.feelslike_c+" C</h2>"
        $(".thunder-data").append(tag);

        var avg="<p><b>"+data.current.feelslike_c+"</b></p>"
        var max="<p><b>"+data.current.temp_c+"</b></p>"

        $(".today-data").append(avg);
        $(".today-data").append(max);
        var avg="<p><b>"+data.forecast.forecastday[0].day.maxtemp_c+"</b></p>"
        var max="<p><b>"+data.forecast.forecastday[0].day.mintemp_c+"</b></p>"

        $(".sat-data").append(avg);
        $(".sat-data").append(max);
        var avg="<p><b>"+data.forecast.forecastday[1].day.maxtemp_c+"</b></p>"
        var max="<p><b>"+data.forecast.forecastday[1].day.mintemp_c+"</b></p>"

        $(".sun-data").append(avg);
        $(".sun-data").append(max);
        var avg="<p><b>"+data.forecast.forecastday[2].day.maxtemp_c+"</b></p>"
        var max="<p><b>"+data.forecast.forecastday[2].day.mintemp_c+"</b></p>"

        $(".mon-data").append(avg);
        $(".mon-data").append(max);
        
    })


    })
