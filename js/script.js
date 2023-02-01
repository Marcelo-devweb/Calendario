let container = document.querySelector(".container");


dycalendar.draw({
   target:'#dycalendar', 
   dayformat: 'dd/mm/yy', 
   type: 'month', 
   monthformat: 'full', 
   highlighttoday: true, 
   prevnextbutton: 'show',
   dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
   dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
   monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
   monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
});