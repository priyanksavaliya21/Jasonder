
// 	$(document).ready(function() {
// 		"use strict";


// $('input[name="video"]:checked').val();
// })
(function ($) {
    "use strict";
    var back_view_count = 5;
    var bottom_view_count = 6;
    var side_view_count = 5;
    var obj = {
      "back-view":[
        {"id":"0", "image":"images/Back-View-minus-5.jpg", "pr":"75", "content":"To Change Pillow Height, Add or Remove Stuffing Per Your Desired Sleep Position or Body Type."},
        {"id":"1", "image":"images/Back-View-minus-4.jpg", "pr":"80", "content":"Desired Sleep Position or Body Type."},
        {"id":"2", "image":"images/Back-View-minus-3.jpg", "pr":"85", "content":"Add or Remove Stuffing Per Your Desired Sleep Position or Body Type."},
        {"id":"3", "image":"images/Back-View-minus-2.jpg", "pr":"90", "content":"Desired Sleep Position or Body Type  Desired Sleep Position."},
        {"id":"4", "image":"images/Back-View-minus-1.jpg", "pr":"95", "content":"Desired Sleep Position or Body Type  Desired Sleep Position."},
        {"id":"5", "image":"images/Back-View-Base.jpg", "pr":"100", "content":"Desired Sleep Position or Body Type  Desired Sleep Position."},
        {"id":"6", "image":"images/Back-View-plus-1.jpg", "pr":"105", "content":"Desired Sleep Position or Body Type  Desired Sleep Position."},
        {"id":"7", "image":"images/Back-View-plus-2.jpg", "pr":"110", "content":"Desired Sleep Position or Body Type  Desired Sleep Position."},
        {"id":"8", "image":"images/Back-View-plus-3.jpg", "pr":"115", "content":"Desired Sleep Position or Body Type  Desired Sleep Position."},
        {"id":"9", "image":"images/Back-View-plus-4.jpg", "pr":"120", "content":"Desired Sleep Position or Body Type  Desired Sleep Position."},
        {"id":"10", "image":"images/Back-View-plus-5.jpg", "pr":"125", "content":"Desired Sleep Position or Body Type  Desired Sleep Position."}
      
      
      ],
      "bottom-view":[
        {"id":"0", "image":"images/BottomView-minus-6.jpg", "pr":"70", "content":"Set Your Head at Any Angle by Adjusting the Amount of Stuffing in Each Pillar Individually."},
        {"id":"1", "image":"images/BottomView-minus-5.jpg", "pr":"75", "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {"id":"2", "image":"images/BottomView-minus-4.jpg", "pr":"80", "content":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {"id":"3", "image":"images/BottomView-minus-3.jpg", "pr":"85", "content":"Set Your Head at Any Angle by Adjusting the Amount of Stuffing in Each Pillar Individually."},
        {"id":"4", "image":"images/BottomView-minus-2.jpg", "pr":"90", "content":"Set Your Head at Any Angle by Adjusting the Amount of Stuffing in Each Pillar Individually."},
        {"id":"5", "image":"images/BottomView-minus-1.jpg", "pr":"95", "content":"Set Your Head at Any Angle by Adjusting the Amount of Stuffing in Each Pillar Individually."},
        {"id":"6", "image":"images/BottomView-Base.jpg", "pr":"100", "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {"id":"7", "image":"images/BottomView-Base_plus1.jpg", "pr":"105", "content":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
        {"id":"8", "image":"images/BottomView-Base_plus2.jpg", "pr":"110", "content":"Set Your Head at Any Angle by Adjusting the Amount of Stuffing in Each Pillar Individually."},
        {"id":"9", "image":"images/BottomView-Base_plus3.jpg", "pr":"115", "content":"Set Your Head at Any Angle by Adjusting the Amount of Stuffing in Each Pillar Individually."},
        {"id":"10", "image":"images/BottomView-Base_plus4.jpg", "pr":"120", "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {"id":"11", "image":"images/BottomView-Base_plus5.jpg", "pr":"125", "content":"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
     
      ],
      "side-view":[
        {"id":"0", "image":"images/Wife_Pillow-Side-View-Base-Minus-5.jpg", "pr":"70", "content":"To Change Pillow Height, Add or Remove Stuffing Per Your Desired Sleep Position or Body Type."},
        {"id":"1", "image":"images/Wife_Pillow-Side-View-Base-Minus-4.jpg", "pr":"75", "content":"To Change Pillow Height, Add or Remove Stuffing Per Your Desired Sleep Position or Body Type."},
        {"id":"2", "image":"images/Wife_Pillow-Side-View-Base-Minus-3.jpg", "pr":"80", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"id":"3", "image":"images/Wife_Pillow-Side-View-Base-Minus-2.jpg", "pr":"85", "content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
        {"id":"4", "image":"images/Wife_Pillow-Side-View-Base-Minus-1.jpg", "pr":"90", "content":"ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
        {"id":"5", "image":"images/Wife_Pillow-Side-View-01.jpg", "pr":"100", "content":"To Change Pillow Height, Add or Remove Stuffing Per Your Desired Sleep Position or Body Type."},
        {"id":"6", "image":"images/Wife_Pillow-Side-View-Base-Plus-1.jpg", "pr":"105", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"id":"7", "image":"images/Wife_Pillow-Side-View-Base-Plus-2.jpg", "pr":"110", "content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
        {"id":"8", "image":"images/Wife_Pillow-Side-View-Base-Plus-3.jpg", "pr":"115", "content":"ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},
        {"id":"9", "image":"images/Wife_Pillow-Side-View-Base-Plus-4.jpg", "pr":"120", "content":"To Change Pillow Height, Add or Remove Stuffing Per Your Desired Sleep Position or Body Type."},
        {"id":"10", "image":"images/Wife_Pillow-Side-View-Base-Plus-5.jpg", "pr":"125", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      ] 
      }

    $("input:radio[name='frontl']").click(function() {
    var array = [], 
        i, 
        $this = $(this),
        val = $(this).attr('data-value');
      $(this).prevAll('input[name="frontl"]').each(function(e){
        var count = e+1;
        array.push(count);
      });
      $('.layer-section').removeClass('active');
      $('.insert-topper-heading h3.main-text').text($this.attr('data-title'));
      $('.insert-topper-heading h3.sub-text').text($this.attr('data-text'));
      for (i = 0; i < array.length; ++i) {
          $('.'+val+' .layer-section').addClass('active');
          $('.toppers_img_'+array[i]).addClass('active');
         
       
      }
    
  });

  $("input:radio[name='pcc']").click(function() {
    var data_img = $(this).attr('data-img');
    $(this).parents('tr').find('.view-img img').attr('src',data_img );
    $('.color-text').text($(this).attr('data-color-text'));

  });

// plus minus 
  $('.back-view .plus-minus-input [data-quantity="plus"]').click(function(e){
  e.preventDefault();

  
  back_view_count += 1;
  var $this = $(this),
  selector = $this.prev('div').find('.incremented-value .btn'),
    object_name = $(this).parents('tr').attr('class');
    plus($this, object_name, selector, back_view_count);
  });

  $('.bottom-view .plus-minus-input [data-quantity="plus"]').click(function(e){
    e.preventDefault();
    console.log("bottom-view");
    bottom_view_count += 1;
    var $this = $(this),
    selector = $this.prev('div').find('.incremented-value .btn'),
      object_name = $(this).parents('tr').attr('class');
      plus($this, object_name, selector, bottom_view_count);
    });

    $('.side-view .plus-minus-input [data-quantity="plus"]').click(function(e){
      e.preventDefault();
      side_view_count += 1;
      var $this = $(this),
      selector = $this.prev('div').find('.incremented-value .btn'),
        object_name = $(this).parents('tr').attr('class');
        plus($this, object_name, selector, side_view_count);
      });
    

function plus($this, object_name, selector, count) {
$.each(obj[object_name], function(key, val) {
  var new_key = key;
  var last_key = Object.keys(obj[object_name]).length-1;
  if(count == new_key){
    var img = val['image'];
    var text = val['content'];
    var pr = val['pr'];
    selector.text(pr+'%');
    $this.parents('tr').find('.view-img img').attr('src',img);
    $this.parents('tr').find('.ar-info p').text(text);
    $this.parents('tr').find('[data-quantity="minus"]').removeClass('pointer-none');
 
    if(last_key == new_key){
      $this.parents('tr').find('[data-quantity="plus"]').addClass('pointer-none');
    }
  }
  

});
}

$('.back-view .plus-minus-input [data-quantity="minus"]').click(function(e) {
  e.preventDefault();
  back_view_count += -1;
  var $this = $(this),
  selector = $this.next('div').find('.incremented-value .btn'),
     object_name = $(this).parents('tr').attr('class');
     minus($this,object_name, selector, back_view_count);
});
$('.bottom-view .plus-minus-input [data-quantity="minus"]').click(function(e) {
  e.preventDefault();
  bottom_view_count += -1;
  var $this = $(this),
  selector = $this.next('div').find('.incremented-value .btn'),
     object_name = $(this).parents('tr').attr('class');
     minus($this,object_name, selector, bottom_view_count);
});

$('.side-view .plus-minus-input [data-quantity="minus"]').click(function(e) {
  e.preventDefault();
  side_view_count += -1;
  var $this = $(this),
  selector = $this.next('div').find('.incremented-value .btn'),
     object_name = $(this).parents('tr').attr('class');
     minus($this,object_name, selector, side_view_count);
});

function minus($this, object_name, selector, count) {
  $.each(obj[object_name], function(key, val) {
    $this.parents('tr').find('[data-quantity="plus"]').removeClass('pointer-none');

    if(count == key){
      console.log(key + "+" + count);
      var img = val['image'];
      var text = val['content'];
      var pr = val['pr'];
      console.log(pr);
      selector.text(pr+'%');
      $this.parents('tr').find('.view-img img').attr('src',img);
      $this.parents('tr').find('.ar-info p').text(text);
 
      if(val['id'] == 0 ){
      $this.parents('tr').find('[data-quantity="minus"]').addClass('pointer-none');
  
    }
    }
  });
}
})(jQuery);
