function showToolbar()
{
	mstyle = new MenuStyle();
	mstyle.bgColor="#6699ff";
	mstyle.subbgColor="#6699ff";
	mstyle.mainMenuBorder=0;
	mstyle.subMenuBorder=0;
	mstyle.subMenuWidth=90;
	mstyle.clsMenuItemIE = "class=menu";
	mstyle.clsMenuItemNS = "class=menu";
	mstyle.menuDelta = 1; // distance between mainmenu and submenu
	mstyle.mainMenuWidth = 720;
	mstyle.mainMenuHeight = 20;
	mstyle.bLeftAligned = 0;

	menu = new Menu(mstyle);

	//additem(��ʶ�����ݣ���ʾ����ַ������)
	//***** Add Standard menus *****

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//��ҳ
	menu.addItem("HomePage","��ҳ","��վ��ҳ","/","");
	menu.addSubItem("HomePage","��վ","http://ctex.dhs.org/","http://ctex.dhs.org/","_top");
	menu.addSubItem("HomePage","Myrice.comվ","http://ctex.myrice.com/","http://ctex.myrice.com/","_top");
	menu.addSubItem("HomePage","China.comվ","http://ctex.at.china.com/","http://ctex.at.china.com/","_top");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//��������
	menu.addItem("Newbie","��������","��������","/newbie/index.htm","");
	menu.addSubItem("Newbie","ʲô��TeX","ʲô��TeX","/newbie/intro.htm","");
	menu.addSubItem("Newbie","��������","��װ��ʹ��","/newbie/beginning.htm","");
	menu.addSubItem("Newbie","��������","ʹ��TeX/LaTeX�ĺð���","/newbie/tools.htm","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//�ĵ�����
	menu.addItem("Document","�����ĵ�","����TeX�ĵ�����","/document/index.htm","");
	menu.addSubItem("Document","LaTeX","LaTeX�����뼼��","/document/latex/index.htm","");
	menu.addSubItem("Document","���ú��","TeX/LaTeX���ú�����","/document/packages/index.htm","");
	menu.addSubItem("Document","ConTeXt","ConTeXt���������","/document/context/index.htm","");
	
	menu.addSeparator("<font color='#9999FF'>|</font>");

	//����֧��
	menu.addItem("Chinese","����֧��","����֧��","/chinese/index.htm","");
	menu.addSubItem("Chinese","CCT","CCT","/chinese/cct.htm","");
	menu.addSubItem("Chinese","CJK","CJK","/chinese/cjk.htm","");
	menu.addSubItem("Chinese","̨�������TeX","̨�������TeX","/chinese/taiwan.htm","");
	menu.addSubItem("Chinese","��SWP��ʹ��CCT","��SWP��ʹ��CCT","/chinese/swp_cct.htm","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//�������
	menu.addItem("Download","�������","�������","/download/index.htm","");
	menu.addSubItem("Download","TeXϵͳ","TeXϵͳ","/download/system.htm","");
	menu.addSubItem("Download","Packages","���","/download/packages.htm","");
	menu.addSubItem("Download","��������","��������","/download/tools.htm","");
	menu.addSubItem("Download","����֧��","����֧��","/download/chinese.htm","");
	menu.addSubItem("Download","�ĵ�����","�ĵ�����","/download/document.htm","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//������Դ
	menu.addItem("Resource","������Դ","������Դ","/resource/index.htm","");
	menu.addSubItem("Resource","��վ�ʼ��б�","��վ�ʼ��б�","/resource/maillist.htm","");
	menu.addSubItem("Resource","����TeX��Դ","����TeX��Դ","/resource/domestic.htm","");
	menu.addSubItem("Resource","����TeX��Դ","����TeX��Դ","/resource/foreign.htm","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	//��̳
	menu.addItem("Forums","��̳","��̳","http://ctex.dhs.org/forums/index.php","");
	menu.addSubItem("Forums","�ʼ��б�","�ʼ��б�","http://ctex.dhs.org/maillist/tex/","");
	menu.addSubItem("Forums","���Բ�","�������������ͽ���","http://ctex.dhs.org/forums/list.php?f=1","");

	menu.addSeparator("<font color='#9999FF'>|</font>");

	menu.showMenu();
}
