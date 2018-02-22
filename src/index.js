module.exports = function check(str, bracketsConfig) {
  var o = true,
  bracketsTipe = 4,
  twis = false,
  stek = []; 

for ( var i = 0; i < str.length; i++){

chr =  str[i];

// определяем тип скобок
for (var j = 0; j < bracketsConfig.length; j++){
  for (var k = 0; k < 2; k++){
    if (chr == bracketsConfig[j][k]){
      bracketsTipe = k;
      
      if ((k == 0)&&(bracketsConfig[j][k] == bracketsConfig[j][k+1])&&(twis == false)){
        twis = true;
        break;
      } 
      if ((k == 0)&&(bracketsConfig[j][k] == bracketsConfig[j][k+1])&&(twis == true)) {
        bracketsTipe = 1;
      }
      
    };
  };
};

l = stek.length - 1;

if ((i == 0)&&(bracketsTipe == 1)||( (  i > 0)&&(stek.length == 0)&&(bracketsTipe == 1) )){
  o = false;
  break;
};

if (bracketsTipe == 0){
  stek.push(chr);
};

if (bracketsTipe == 1){
  
  stekL = stek[l].charCodeAt(0);
  chrL = chr.charCodeAt(0);
  if ((stekL < chrL)&&( Math.abs(stekL - chrL) <= 2)){
    stek.pop();
  } 
  
  if ((stekL < chrL)&&( Math.abs(stekL - chrL) > 2)){
    o = false;
    break;
  } 
  
  if((twis == true)&&(stek[l] == chr)){
    stek.pop();
    twis = false;
  } 
  if((twis == false)&&(stek[l] == chr)){
    o = false;
    break;
  };
};

};

if (stek.length > 0){
  o = false;
}

return o;
}
