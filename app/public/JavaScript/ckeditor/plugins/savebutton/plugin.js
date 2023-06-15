 CKEDITOR.plugins.add('savebutton',
  {
	  init: function (editor) {
        editor.ui.addButton('savebutton',
            {
                label: 'Salvar Documento',
                command: 'SaveDocument',
                icon: CKEDITOR.plugins.getPath('savebutton') + 'icons/save.png'
            });
        editor.addCommand('SaveDocument', { exec: saveDocument });
        }
  });
  function saveDocument(e) {
	 angular.element('#'+e.config.controller).scope().persistModelo();
  }