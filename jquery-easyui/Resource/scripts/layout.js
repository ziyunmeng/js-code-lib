var tabCache = new Object;

$(function () {
    //�����Ѵ򿪵�tab���ٴδ�ͬһ��tabʱ��ѡ���Ѵ򿪵�tab
    $('#tabs').tabs({
        onSelect: function (title, index) {
            tabCache[title] = index;
        },
        onBeforeClose: function (title, index) {
            return confirm('��ȷ��Ҫ�رա�' + title + '����');
        },
        onClose: function (title, index) {
            delete tabCache[title];
        }
    });
});

function addNewTab(title, url) {
    if (tabCache[title] == undefined) {
        if (url == '') return;
        $('#tabs').tabs('add', {
            title: title,
            content: '<iframe width="100%" height="99%" frameborder="0" marginwidth="5" marginheight="5" ' +
                ' allowtransparency="yes" src="' + url + '" ></iframe>',
            closable: true
        });
    } else {
        $('#tabs').tabs('select', parseInt(tabCache[title]));
    }
}
