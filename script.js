//your JS code here. If required.

function firstnonrepeatedchar(a)
	{
	for(let i=0;i<a.length;i++)
					 { let char=a[i];
					 if(a.indexOf(char)==i&& a.indexOf(char,i+1)==-1)
					 {
						 return char;
						 
					 }else if(a==='')
					 {
						 return null;
					 }else
					 {
						 return null
					 }
						 }
	}
					 
					 
