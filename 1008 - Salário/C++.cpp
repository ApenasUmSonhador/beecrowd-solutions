#include <iostream>
#include <iomanip>
using namespace std;


int main() {
    
    int n,h;
    float money_per_hour;
    cin >>  n >> h >> money_per_hour;
    cout << "NUMBER = " << n << endl;
    cout << fixed << setprecision(2);
    cout << "SALARY = U$ " << money_per_hour*h << endl;
 
    return 0;
}