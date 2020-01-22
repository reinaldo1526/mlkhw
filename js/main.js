//--Q1-- //
let ar1 = [1,2,3,1] 

function findArr(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j=0; j < 4; j++){
            if(arr[i] == arr[j]){
                return true 
            }
        }
    return false
    } 
}

//--Q3--//
class intArray {
    public:
      vector<int> sumZero(int n) {
        vector<int> ans;
        for (int i = 1; i <= n / 2; ++i) {
          ans.push_back(i);
          ans.push_back(-i);
        }
        if (ans.size() != n) ans.push_back(0);
        return ans;
      }
    };
    // Q4 //
class Happy1 {
    public static boolean isHappy_number(int num)
    {
        Set<Integer> unique_num = new HashSet<Integer>();
        while (unique_num.add(num))
        {
            int value = 0;
            while (num > 0)
            {
                value += Math.pow(num % 10, 2);
                num /= 10;
            }
            num = value;
            }
        return num == 1;
        }
    public static void main(String[] args)
    {
        System.out.print(“Input a number: “);
        int num = new Scanner(System.in).nextInt();
        System.out.println(isHappy_number(num) ? “TRUE” : “FALSE”);
        }
    }