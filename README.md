Live Tiles plugin usage:
===============

To install using plugman
---
	
From plugin registry:
	
	$ plugman install --project . --platform wp7|wp8 --plugin com.risingj.cordova.livetiles

From the repo:
	
	$ plugman install --project . --platform wp7|wp8 --plugin https://github.com/purplecabbage/livetiles.git

From a local clone:
	
	$ plugman install --project . --platform wp7|wp8 --plugin #path_to_local_clone#

To install using cordova-cli
---

From plugin registry:

	$ cordova plugin add com.risingj.cordova.livetiles

From the repo:

	$ cordova plugin add https://github.com/purplecabbage/livetiles.git

From a local clone:

	$ cordova plugin add #path_to_local_clone#		

   

Somewhere in your code, after device ready has fired 
---
   
	// Update the applications live tile
	LiveTiles.updateAppTile(success, fail, { 
		title: 'title', 
		image:'Images/appbar.next.rest.png', 
		count: 5, 
		backTitle: 'Back title', 
		backContent:'Back side', 
		backImage : 'Images/appbar.close.rest.png'
	});    

	// create a secondary tile
	LiveTiles.createSecondaryTile(success, fail, { 
		title: 'title', 
		image: 'Images/appbar.save.rest.png', 
		count: 5, 
		secondaryTileUri: 'www/myPage.html',
		backTitle:'back' 
	});
   

	// update the secondary tile
	LiveTiles.updateSecondaryTile(success, fail, { 
		title: 'title', 
		count: 5, 
		secondaryTileUri: 'www/myPage.html' 
	});

	// remove the secondary tile
	LiveTiles.deleteSecondaryTile(success, fail, { 
		secondaryTileUri: 'www/myPage.html' 
	});
    
    
