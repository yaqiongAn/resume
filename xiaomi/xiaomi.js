$(document).ready(function() {
  $.ajax({
    url:"./xiaomi.json",
    dataType:'json',
    success: function(data,status){
      // alert("Data: " + data + "\nStatus: " + status);
      var card=data.data.data.sections[1].body.items;
      console.log(card);
      $('.card-div').each(function(index, el) {
        $('.card-div').eq(index).prepend('<a href="'+card[index].action.path+'"></a>');
        $('.img').eq(index).append('<img src="http://'+card[index].img_url.substring(2)+'">');
      });


      var news=data.data.data.sections[3].body;
      $('.news-img').append('<img src="'+news.title_logo_url+'">');
      var newsStr=news.items;
      $('.newspaper').html(newsStr[2].news_title);
      setInterval(function(){
        function random(){
          return parseInt(Math.random()*3);
        }
        var num=random();
        $('.newspaper').html(newsStr[num].news_title);
      },2000)
      // section
      var sectionStr=data.data.data.sections[5].body.items;
      $('.section div').each(function(index, el) {
        $('.section div').eq(index).append('<img src="'+sectionStr[index].img_url+'">')
      });
      // mi5
      var mi5Str=data.data.data.sections[7].body.items[0].img_url;
      $('.mi5').append('<img src="'+mi5Str+'">')
      // book
      var bookStr=data.data.data.sections[9].body.items[0].img_url;
      $('.book').prepend('<img src="'+bookStr+'">')
      // redMi
      var redMiStr=data.data.data.sections[11].body.items[0].img_url;
      $('.redMi').prepend('<img src="'+redMiStr+'">');
      // bigbox1
      // box1
      var box1Str=data.data.data.sections[13].body.items;
      // console.log(box1Str);
      $('.bigbox1>.box1>div').each(function(index, el) {
        $('.bigbox1>.box1>div').eq(index).prepend('<img src="'+box1Str[index].img_url+'">');
        $('.bigbox1>.box1>div').eq(index).find('.info>.name').html(box1Str[index].product_name);
        $('.bigbox1>.box1>div').eq(index).find('.info>.drief').html(box1Str[index].product_brief)
        $('.bigbox1>.box1>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box1Str[index].product_price);

      });
      // box2
      var box2Str=data.data.data.sections[14].body.items;
      // console.log(box2Str);
      $('.bigbox1>.box2>div').each(function(index, el) {
        $('.bigbox1>.box2>div').eq(index).prepend('<img src="'+box2Str[index].img_url+'">');

        $('.bigbox1>.box2>div').eq(index).find('.info>.name').html(box2Str[index].product_name);
        $('.bigbox1>.box2>div').eq(index).find('.info>.drief').html(box2Str[index].product_brief)
        $('.bigbox1>.box2>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box2Str[index].product_price);

      });
      $('.bigbox1>.box2>div').eq(1).append('<img src="'+box2Str[1].product_tag+'" class="imgtag">');
      $('.bigbox1>.box2>div').eq(1).find('.info>.price').append('<img src="./money.png" alt=""><s>'+box2Str[1].product_org_price+'</s>');

      // box3
      var box3Str=data.data.data.sections[15].body.items;
      // console.log(box3Str);
      $('.bigbox1>.box3>div').each(function(index, el) {
        $('.bigbox1>.box3>div').eq(index).prepend('<img src="'+box3Str[index].product_tag+'" class="imgtag"><img src="'+box3Str[index].img_url+'">');

        $('.bigbox1>.box3>div').eq(index).find('.info>.name').html(box3Str[index].product_name);
        $('.bigbox1>.box3>div').eq(index).find('.info>.drief').html(box3Str[index].product_brief)
        $('.bigbox1>.box3>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box3Str[index].product_price);

      });
      $('.bigbox1>.box3>div').eq(0).find('.info>.price').append('<img src="./money.png" alt=""><s style="color:silver">'+box2Str[0].product_org_price+'</s>');

      // cells
      var cellsStr=data.data.data.sections[17].body.items;
      console.log(cellsStr);
      $('.cells-img').append('<img src="'+cellsStr[0].img_url+'" alt="">')

      // mi-img
      var miimgStr=data.data.data.sections[19].body.items;
      console.log(miimgStr);
      $('.mi-img').prepend('<img src="'+miimgStr[0].img_url+'" alt="">')

      // bigbox2
      // box1
      var box1Str2=data.data.data.sections[21].body.items;
      // console.log(box1Str);
      $('.bigbox2>.box1>div').each(function(index, el) {
        $('.bigbox2>.box1>div').eq(index).prepend('<img src="'+box1Str2[index].img_url+'">');
        $('.bigbox2>.box1>div').eq(index).find('.info>.name').html(box1Str2[index].product_name);
        $('.bigbox2>.box1>div').eq(index).find('.info>.drief').html(box1Str2[index].product_brief)
        $('.bigbox2>.box1>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box1Str2[index].product_price);

      });
      $('.bigbox2>.box1>div').eq(0).append('<img src="'+box1Str2[0].product_tag+'" class="imgtag">');
      // box2
      var box2Str2=data.data.data.sections[22].body.items;
      // console.log(box2Str);
      $('.bigbox2>.box2>div').each(function(index, el) {
        $('.bigbox2>.box2>div').eq(index).prepend('<img src="'+box2Str2[index].img_url+'">');

        $('.bigbox2>.box2>div').eq(index).find('.info>.name').html(box2Str2[index].product_name);
        $('.bigbox2>.box2>div').eq(index).find('.info>.drief').html(box2Str2[index].product_brief)
        $('.bigbox2>.box2>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box2Str2[index].product_price);

      });
      // $('.bigbox2>.box2>div').eq(1).append('<img src="'+box2Str2[1].product_tag+'" class="imgtag">');
      $('.bigbox2>.box2>div').eq(1).find('.info>.price').append('<img src="./money.png" alt=""><s>'+box2Str2[1].product_org_price+'</s>');

      // box3
      var box3Str2=data.data.data.sections[23].body.items;
      // console.log(box3Str);
      $('.bigbox2>.box3>div').each(function(index, el) {
        $('.bigbox2>.box3>div').eq(index).prepend('<img src="'+box3Str2[index].img_url+'">');

        $('.bigbox2>.box3>div').eq(index).find('.info>.name').html(box3Str2[index].product_name);
        $('.bigbox2>.box3>div').eq(index).find('.info>.drief').html(box3Str2[index].product_brief)
        $('.bigbox2>.box3>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box3Str2[index].product_price);

      });
      $('.bigbox2>.box3>div').eq(0).append('<img src="'+box3Str2[0].product_tag+'" class="imgtag">');
      $('.bigbox2>.box3>div').eq(0).find('.info>.price').append('<img src="./money.png" alt=""><s style="color:silver">'+box3Str2[0].product_org_price+'</s>');


      // wrap1-img
      var wrap1imgstr=data.data.data.sections[27].body.items;
      $('.wrap1-img').append('<img src="'+wrap1imgstr[0].img_url+'">');

      // wrap2-img
      var wrap2imgstr=data.data.data.sections[29].body.items;
      $('.wrap2-img').append('<img src="'+wrap2imgstr[0].img_url+'">');


      // bigbox3
      // bigbox3-box1
      var bigbox3box1Str=data.data.data.sections[31].body.items;
      $('.bigbox3-box1-img').prepend('<img src="'+bigbox3box1Str[0].img_url+'">');
      $('.bigbox3-info').eq(0).find('.name').html(bigbox3box1Str[0].product_name);
      $('.bigbox3-info').eq(0).find('.drief').html(bigbox3box1Str[0].product_brief);
      $('.bigbox3-info').eq(0).find('.price').prepend('<img src="./money.png" alt="">'+bigbox3box1Str[0].product_price);

      // bigbox3-box2
      var bigbox3box2Str=data.data.data.sections[32].body.items;
      $('.bigbox3-box2-img').append('<img src="'+bigbox3box2Str[0].img_url+'">');
      $('.bigbox3-info').eq(1).find('.name').html(bigbox3box2Str[0].product_name);
      $('.bigbox3-info').eq(1).find('.drief').html(bigbox3box2Str[0].product_brief);
      $('.bigbox3-info').eq(1).find('.price').prepend('<img src="./money.png" alt="">'+bigbox3box2Str[0].product_price);

      // bigbox3-box3
      var bigbox3box3Str=data.data.data.sections[33].body.items;
      $('.bigbox3-box3-img').prepend('<img src="'+bigbox3box3Str[0].img_url+'">');
      $('.bigbox3-info').eq(2).find('.name').html(bigbox3box3Str[0].product_name);
      $('.bigbox3-info').eq(2).find('.drief').html(bigbox3box3Str[0].product_brief);
      $('.bigbox3-info').eq(2).find('.price').prepend('<img src="./money.png" alt="">'+bigbox3box3Str[0].product_price);

      // wrap3-img
      var wrap3imgstr=data.data.data.sections[37].body.items;
      $('.wrap3-img').append('<img src="'+wrap3imgstr[0].img_url+'">');

      // bigbox4
      // bigbox4 bigbox1
      var bigbox4str1=data.data.data.sections[39].body.items;
      $('.bigbox').eq(0).find('div').each(function(index, el) {
        $('.bigbox').eq(0).find('div').eq(index).append('<img src="'+bigbox4str1[index].img_url+'">')
      });

      // bigbox4 bigbox2
      var bigbox4str2=data.data.data.sections[41].body.items;
      $('.bigbox').eq(1).find('div').each(function(index, el) {
        $('.bigbox').eq(1).find('div').eq(index).append('<img src="'+bigbox4str2[index].img_url+'">')
      });

      // bigbox4 bigbox3
      var bigbox4str3=data.data.data.sections[43].body.items;
      $('.bigbox').eq(2).find('div').each(function(index, el) {
        $('.bigbox').eq(2).find('div').eq(index).append('<img src="'+bigbox4str3[index].img_url+'">')
      });

      // wrap4
      var wrap4imgstr=data.data.data.sections[45].body.items;
      $('.wrap4').append('<img src="'+wrap4imgstr[0].img_url+'">');

      // wrap5-img1
      var wrap5img1str=data.data.data.sections[47].body.items;
      $('.wrap5-img1').append('<img src="'+wrap5img1str[0].img_url+'">');

      // wrap5-img2
      var wrap5img2str=data.data.data.sections[48].body.items;
      $('.wrap5-img2').append('<img src="'+wrap5img2str[0].img_url+'">');


      //


    }
  });

  $.get("./xiaomi2.json",function(dataobj,status){
    // alert("Data: " + data + "\nStatus: " + status);
    console.log(dataobj);
    // bigbox5
    // bigbox5-1
    var box5box1Str2=dataobj.data.data.sections[0].body.items;
    // console.log(box1Str);
    $('.bigbox5>.box1>div').each(function(index, el) {
      $('.bigbox5>.box1>div').eq(index).prepend('<img src="'+box5box1Str2[index].img_url+'">');
      $('.bigbox5>.box1>div').eq(index).find('.info>.name').html(box5box1Str2[index].product_name);
      $('.bigbox5>.box1>div').eq(index).find('.info>.drief').html(box5box1Str2[index].product_brief)
      $('.bigbox5>.box1>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box5box1Str2[index].product_price);
    });

    // bigbox5-2
    var box5box2Str2=dataobj.data.data.sections[1].body.items;
    // console.log(box1Str);
    $('.bigbox5>.box2>div').each(function(index, el) {
      $('.bigbox5>.box2>div').eq(index).prepend('<img src="'+box5box2Str2[index].img_url+'">');
      $('.bigbox5>.box2>div').eq(index).find('.info>.name').html(box5box2Str2[index].product_name);
      $('.bigbox5>.box2>div').eq(index).find('.info>.drief').html(box5box2Str2[index].product_brief)
      $('.bigbox5>.box2>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box5box2Str2[index].product_price);
    });

    // bigbox5-3
    var box5box3Str2=dataobj.data.data.sections[2].body.items;
    // console.log(box1Str);
    $('.bigbox5>.box3>div').each(function(index, el) {
      $('.bigbox5>.box3>div').eq(index).prepend('<img src="'+box5box3Str2[index].img_url+'">');
      $('.bigbox5>.box3>div').eq(index).find('.info>.name').html(box5box3Str2[index].product_name);
      $('.bigbox5>.box3>div').eq(index).find('.info>.drief').html(box5box3Str2[index].product_brief)
      $('.bigbox5>.box3>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box5box3Str2[index].product_price);
    });

    // wrap6
    var wrap6=dataobj.data.data.sections[4].body.items;
    $('.wrap6').append('<img src="'+wrap6[0].img_url+'">');


    var box6box1Str=dataobj.data.data.sections[5].body.items;
    // console.log(box1Str);
    $('.bigbox6>.box1>div').each(function(index, el) {
      $('.bigbox6>.box1>div').eq(index).prepend('<img src="'+box6box1Str[index].img_url+'">');
      $('.bigbox6>.box1>div').eq(index).find('.info>.name').html(box6box1Str[index].product_name);
      $('.bigbox6>.box1>div').eq(index).find('.info>.drief').html(box6box1Str[index].product_brief)
      $('.bigbox6>.box1>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box6box1Str[index].product_price);
    });

    // bigbox6-2
    var box6box2Str=dataobj.data.data.sections[6].body.items;
    // console.log(box1Str);
    $('.bigbox6>.box2>div').each(function(index, el) {
      $('.bigbox6>.box2>div').eq(index).prepend('<img src="'+box6box2Str[index].img_url+'">');
      $('.bigbox6>.box2>div').eq(index).find('.info>.name').html(box6box2Str[index].product_name);
      $('.bigbox6>.box2>div').eq(index).find('.info>.drief').html(box6box2Str[index].product_brief)
      $('.bigbox6>.box2>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box6box2Str[index].product_price);
    });

    // bigbox6-3
    var box6box3Str=dataobj.data.data.sections[7].body.items;
    // console.log(box1Str);
    $('.bigbox6>.box3>div').each(function(index, el) {
      $('.bigbox6>.box3>div').eq(index).prepend('<img src="'+box6box3Str[index].img_url+'">');
      $('.bigbox6>.box3>div').eq(index).find('.info>.name').html(box6box3Str[index].product_name);
      $('.bigbox6>.box3>div').eq(index).find('.info>.drief').html(box6box3Str[index].product_brief)
      $('.bigbox6>.box3>div').eq(index).find('.info>.price').prepend('<img src="./money.png" alt="">'+box6box3Str[index].product_price);
    });

    // wrap7
    var wrap7=dataobj.data.data.sections[9].body.items;
    $('.wrap7').append('<img src="'+wrap7[0].img_url+'">');

    // wrap8
    var wrap8=dataobj.data.data.sections[10].body.items;
    $('.wrap8img').append('<img src="'+wrap8[0].img_url+'">');
    $('.wrap8 .price').append('<span>'+wrap8[0].product_price+'</span>')

    // wrap9img1
    var wrap9img1=dataobj.data.data.sections[10].body.items;
    $('.wrap9img1').prepend('<img src="'+wrap9img1[1].img_url+'">');
    $('.wrap9img1 .price').find('.drief').html(wrap9img1[1].product_name)
    $('.wrap9img1 .price').append('<img src="./money.png" alt=""><span>'+wrap9img1[1].product_price+'</span>')

    // wrap9img2
    var wrap9img2=dataobj.data.data.sections[11].body.items;
    $('.wrap9img2').prepend('<img src="'+wrap9img2[0].img_url+'">');
    // $('.wrap9img1 .price').find('.drief').html(wrap9img1[1].product_brief)
    $('.wrap9img2 .price').prepend('<img src="./money.png" alt=""><span><span>'+wrap9img2[0].product_price+'</span>');

    // wrap10
    var wrap10=dataobj.data.data.sections[13].body.items;
    $('.wrap10').append('<img src="'+wrap10[0].img_url+'">');
  });

  // footer
  $('.footer li').hover(function() {
    $(this).find('p').css('color', '#ff6000');
  }, function() {
    $(this).find('p').css('color', 'gray');
  });

  var len=$('.turn-wrap div').length;
  console.log(len);
  var i=-1;
      var time=setInterval(rightmove,3000);
      function rightmove(){
        i++;
        if (i == len) {
            i = 0;
        }
        $(".point span").eq(i).addClass("active").siblings().removeClass("active");
        $(".turn-wrap div").eq(i).fadeIn(300).siblings().fadeOut(300);
        // $(".turn-wrap div").eq(i).animate({left: 0}, 300)
        // $(".turn-wrap div").eq(i).css({left: 50%})
      }

});
