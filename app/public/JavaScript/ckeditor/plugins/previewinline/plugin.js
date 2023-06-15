 CKEDITOR.plugins.add('previewinline',
  {
	  init: function (editor) {
        editor.ui.addButton('previewinline',
            {
                label: 'Visualizar Documento',
                command: 'previewInline',
                icon: CKEDITOR.plugins.getPath('previewinline') + 'icons/preview.png'
            });
        editor.addCommand('previewInline', { exec: previewInline });
        }
  });
  function previewInline(e) {
	 angular.element('#'+e.config.controller).scope().preview();
  };