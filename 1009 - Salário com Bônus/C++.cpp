#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    string name;
    float salary, sell;
    cin >> name >> salary >> sell;
    cout << fixed << setprecision(2);
    cout << "TOTAL = R$ " << salary + 0.15 * sell << endl;

    return 0;
}