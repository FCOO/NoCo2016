/****************************************************************************
	NoCo2016.js,

	(c) 2016, FCOO

	https://github.com/FCOO/NoCo2016
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";

	var contents = [
		{ header: 'Dette er en overskrift',
			links	:	[
				{ text: 'FCOOs logo', href: 'FCOO_logo_H200.png' },
				{ text: 'FCOOs logo igen', href: 'FCOO_logo_H200.png' },
			]	
		},
		{ header: 'Dette er en anden overskrift',
			links	:	[
				{ text: 'NoCO2016s logo', href: 'Logo-NoCo2016.jpg' },
				{ text: 'NoCO2016s logo igen', href: 'Logo-NoCo2016.jpg' },
			]	
		},



	];



	
	var airforceId = 'airforce_links',
			panelGroup = $('#'+airforceId),
			panel, panelHeading, panelDiv, panelBody, panelUl, i, j, id, link;
	
	
	for (i=0; i<contents.length; i++ ){
		id = 'airforce'+i;
		panel = $('<div class="panel panel-default">').appendTo(panelGroup);
		panelHeading = $('<div class="panel-heading" role="tab" id="heading'+id+'">').appendTo(panel);
		$('<h4 class="panel-title">')
			.append( $('<a role="button" data-toggle="collapse" data-parent="#'+airforceId+'" href="#collapse'+id+'" aria-expanded="true" aria-controls="collapse'+id+'">' + contents[i].header +'</a>') )
			.appendTo( panelHeading );

		panelDiv = $('<div id="collapse'+id+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading'+id+'">').appendTo(panelGroup);
		panelBody = $('<div class="panel-body">').appendTo( panelDiv );
		panelUl = $('<ul class="list-group">').appendTo(panelBody);

		for (j=0; j<contents[i].links.length; j++ ){
			link = contents[i].links[j];
			panelUl.append(
				$('<li class="list-group-item">'+
						'<a class="pull-right btn btn-info btn-xs" href="'+link.href+'" role="button" download>Download</a>&nbsp;<a target="_blank" href="'+link.href+'" role="button">'+link.text+'</a></li>')
			);

		
		}
			
		
	}




/*
				  <div class="panel panel-default">
				    <div class="panel-heading" role="tab" id="headingOne">
				      <h4 class="panel-title">
				        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #1</a>
							</h4>
				    </div>
				    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
				      <div class="panel-body">
								<ul class="list-group">
									<li class="list-group-item"><a class="btn btn-info btn-xs" href="FCOO_logo_H200.png" role="button" download>Download</a>&nbsp;<a target="_blank" href="FCOO_logo_H200.png" role="button">Cras justo odio</a></li>
								</ul>



*/



}(jQuery, this, document));



