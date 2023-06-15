/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	config.skin = 'moonocolor';
	config.toolbar = 'CustomToolbar';
	
	config.toolbar_CustomToolbar =
	    [
	        ['savebutton','previewinline','Source', '-', 'SaveButton', 'NewPage', 'Preview', 'Print', '-', 'Templates' ],
	        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
	        [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ],
	        [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ],
	        '/',        
	        [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ],
	        [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'],
	        [ 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe', 'base64image' ],
	         '/',
	        [ 'Styles', 'Format', 'Font', 'FontSize' ],
	        [ 'TextColor', 'BGColor' ],
	        [ 'Maximize', 'ShowBlocks' ],
	        [ 'Link', 'Unlink', 'Anchor' ]
	    ];

};
