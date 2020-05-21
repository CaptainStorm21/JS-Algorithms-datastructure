// [,,,,,,,,]
// key: "Jim"
// value: "232-2322"

// function get("Jim") => 8

//construction function
function HashTable(size){
  this.buckets = Array(size);
  this.numBuckets=this.buckets.length;
}

function HashNode(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null;
}


var myHT = new HashTable (30);
console.log(myHT);
