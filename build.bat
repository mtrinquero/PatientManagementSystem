del pms.war
if not exist dist mkdir dist
jar cvf dist\pms.war -C app .

copy dist\pms.war %TOMCAT_HOME%\webapps\
