/**
 *	Super TOC! v1.0 - Table Of Content jQuery plugin
 *  http://www.kyrielles.net/
 *  
 *  Copyright (c) 2010-2011 Alan Frog
 *  Licensed under the GNU General Public License
 *  See <license.txt> or <http://www.gnu.org/licenses/>
 *  
 *  Requires: jQuery <http://jquery.com/>
 */
(function($){
	$.fn.superToc = function( options ){

		// Default settings
		var settings = {
			headings:"h1,h2,h3"
		};
		
		var clean = function(s){
			var r=s.toLowerCase();
			r = r.replace(/\s/g,"");
			r = r.replace(/[абвгде]/g,"a");
			r = r.replace(/ж/g,"ae");
			r = r.replace(/з/g,"c");
			r = r.replace(/[ийкл]/g,"e");
			r = r.replace(/[мноп]/g,"i");
			r = r.replace(/с/g,"n");                
			r = r.replace(/[туфхц]/g,"o");
			r = r.replace(/њ/g,"oe");
			r = r.replace(/[щъыь]/g,"u");
			r = r.replace(/[эя]/g,"y");
			r = r.replace(/\W/g,"");
			r = r.replace(/\W/g,"");
			return r;
		};
			
		// Applying plugin
		return this.each( function() {
		
			// Client settings
			if ( options ) { 
				$.extend( settings, options );
			}

			//var self = this;
			var domObj = $( this );
			var toc = "";
			
			$( settings.headings, domObj ).each(function(){
				var curtag = $( this );
				var tagId = curtag.attr( "id" );
				var tagText = curtag.text();				
				var tagType = curtag.get(0).tagName.toLowerCase();												
				
				if( !tagId ){
					tagId = "TOC"+ clean(tagText);
					curtag.attr( "id", tagId );
				}
				
				toc += '<li class="toc-'+tagType+'"><a href="#'+tagId+'">'+tagText+'</a></li>';
			});
			
			domObj.prepend('<div class="supertoc"><ul>'+toc+'</ul></div>');

		});
	};
})( jQuery );