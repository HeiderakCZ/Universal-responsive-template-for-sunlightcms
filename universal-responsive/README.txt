Univerzální responzivní motiv pro SunLight CMS 8.3.1+
=====================================================

Instalace
---------
1. Nahrajte složku universal-responsive do plugins/templates/.
2. V administraci otevřete Pluginy > Motivy, načtěte pluginy znovu a aktivujte „Univerzální responzivní motiv“.
3. V nastavení motivu otevřete akci Konfigurovat.
4. Do položky header_text napište libovolný text do horní lišty. Prázdná hodnota text skryje.
5. Do položky logo_url vložte adresu obrázku loga. Obrázek lze nahrát do médií webu a jeho adresu vložit sem. Pokud položku necháte prázdnou, použije se název webu.
6. Volitelně upravte logo_alt pro přístupný popis obrázku.
7. Boxy pro pravý sloupec přiřaďte do slotu „pravý postranní panel“.

Motiv vyžaduje SunLight CMS 8.3.1 nebo novější verzi řady 8. Obsahuje responzivní navigaci, hlavní obsah, pravý postranní panel, patičku a přepínač světlého/tmavého režimu. Neodkazované obrázky v obsahu automaticky otevře v Lightboxu; plugin Lightbox musí být v CMS aktivní. Výpisy článků používají oddělené karty s upravenými náhledy, perexy a metadaty. Volba režimu se ukládá v prohlížeči. Mobilní formulářové tabulky zobrazují popisky nad poli.

Soubory
-------
plugin.json   definice motivu, nastavení a pravý slot
template.php  HTML/PHP šablona
style.css     responzivní vzhled
template.js   přepínání barevného režimu
event/        načtení konfigurace motivu
labels/       české a anglické popisky
