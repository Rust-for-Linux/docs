initSidebarItems({"struct":[["CondVar","Exposes the kernel's `struct wait_queue_head` as a condition variable. It allows the caller to atomically release the given lock and go to sleep. It reacquires the lock when it wakes up. And it wakes up when notified by another thread (via [`CondVar::notify_one`] or [`CondVar::notify_all`]) or because the thread received a signal."],["Guard","Allows mutual exclusion primitives that implement the [`Lock`] trait to automatically unlock when a guard goes out of scope. It also provides a safe and convenient way to access the data protected by the lock."],["LockedBy","Allows access to some data to be serialised by a lock that does not wrap it."],["Mutex","Exposes the kernel's `struct mutex`. When multiple threads attempt to lock the same mutex, only one at a time is allowed to progress, the others will block (sleep) until the mutex is unlocked, at which point another thread will be allowed to wake up and make progress."],["Ref","A reference-counted pointer to an instance of `T`."],["RefCount","Holds the reference count of an object."],["SpinLock","Exposes the kernel's `spinlock_t`. When multiple CPUs attempt to lock the same spinlock, only one at a time is allowed to progress, the others will block (spinning) until the spinlock is unlocked, at which point another CPU will be allowed to make progress."]],"trait":[["Lock","A generic mutual exclusion primitive."],["NeedsLockClass","A trait for types that need a lock class during initialisation."],["RefCounted","Trait for reference counted objects."]]});