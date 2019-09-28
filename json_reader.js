
function OnButtonClick() {// 各エレメントを取得
	var element_file = document.getElementById("input_02_file");
    var element_result = document.getElementById("edit_02_result");

	// ------------------------------------------------------------
	// サポート状況
	// ------------------------------------------------------------
	if(!window.File){
		element_result.value = "File クラスに対応していません。";
		return;
	}
	if(!window.FileReader){
		element_result.value = "FileReader クラスに対応していません。";
		return;
	}

    // ファイルが選択されたか
    if(!(element_file.value)) return;        

    // ------------------------------------------------------------
    // File オブジェクトを取得（HTML5 世代）
    // ------------------------------------------------------------
    // ファイルリストを取得
    var file_list = element_file.files;
    console.log(file_list);
    if(!file_list) return;

    // 0 番目の File オブジェクトを取得
    var file = file_list[0];
    console.log(file);
    if(!file) return;

    // pmjファイル以外は処理を止める
    if(!file.name.match(".pmj$") && !file.name.match(".chp$")) {
        element_result.value = "pmjファイル、またはchpファイルを選択してください";
        return;
    }
    // ------------------------------------------------------------
    // FileReader オブジェクトを生成
    // ------------------------------------------------------------
    var file_reader = new FileReader();

    // ------------------------------------------------------------
    // 読み込み成功時に実行されるイベント
    // ------------------------------------------------------------
    file_reader.onload = function(e){
        console.log(file_reader.result);
        element_result.value = file_reader.result;
    };

    // ------------------------------------------------------------
    // 読み込みを開始する（テキスト文字列を得る）
    // ------------------------------------------------------------
    file_reader.readAsText(file, "shift-jis");

}