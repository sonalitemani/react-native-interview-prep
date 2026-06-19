      # react-native-interview-prep
Interview Preparation 
1. What is useState?
react native hook allow to manage functional component . whenever the state changes in setter function the react will re render the component and  updates the UI accordingly

3. What is useEffect?
its a react native hook allow us to manage side effect of subscriptions , event listeners , api calls . its run after the component render and can be controlled by dependency array . and It also supports cleanup functions to prevent memory leaks.

3. What is useRef?
it is used to store mutable values that persits between renders without triggering re-renders.It is commonly used for accessing DOM elements directly and storing previous values or timers.

4.What is useMemo?
its a performance optimization hook that can caches the expensive computation . react only recomputes when specified dependencies changes and to prevent uneccessary calculations .

5.What is useCallback?
its a react hook it used memorize a function . pass a function between renders . and it basically used in performance optimization ,  paassing a callback in chield components and passing function in dependency array 

6.Difference Between useMemo and useCallback
| useMemo                         | useCallback                         |
| ------------------------------- | ----------------------------------- |
| Memoizes a value                | Memoizes a function                 |
| Returns computed result         | Returns function reference          |
| Used for expensive calculations | Used to prevent function recreation |


7.Difference between Props and State?

Props vs State
| Feature       | Props                                                | State                                   |
| ------------- | ---------------------------------------------------- | --------------------------------------- |
| Definition    | Data passed from parent component to child component | Data managed within the component       |
| Mutability    | Read-only (immutable)                                | Mutable (can be changed)                |
| Controlled By | Parent component                                     | Component itself                        |
| Re-render     | Component re-renders when props change               | Component re-renders when state changes |
| Purpose       | Pass data and behavior between components            | Store and manage component data         |
| Modification  | Cannot be modified directly by child                 | Can be updated using setter functions   |

8.Why did you move API logic into a custom hook?
The hook separates business logic from UI. It makes the code reusable, easier to test, and keeps components focused on rendering.

9.Explain React Native Architecture ? 
       1. React Native allows developers to build mobile applications using JavaScript while rendering native UI components. 
       2. Traditionally, React Native had three main parts: the JavaScript Thread, the Native Thread, and the Bridge. 
       3. The JavaScript thread contains the business logic and React code, while the Native thread handles platform-specific UI rendering. 
       4. Communication between them happens through the Bridge. 
       5. In the new architecture, React Native introduced JSI, TurboModules, and Fabric, which reduce bridge overhead and improve performance by      enabling more direct communication between JavaScript and native code.

