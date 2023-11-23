(()=>{

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    // 初期化(読み込み時に3つのうちの1つ目のタブの設定を行う)
    const init = () => {
        $content[0].style.display = 'none';
    };
    init();


    //クリックしたら起こるイベント
    const handleClick = (e) => {
        e.preventDefault();

        // クリックされたnavとdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        // クリックされた以外のnav、contentsを一度すべてリセット
        let index = 0;
        while(index < navLen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    };

    // 全nav要素に対して関数を適応・発火
    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();