/**
 * Created by vorh on 6/28/17.
 */


export class Utils {


  static arraySearch(array:any[],value:any){

    for (let i = 0; i< array.length;i++){
      if (array[i]===value){
        return array[i];
      }
    }

    return null;
  }
}
